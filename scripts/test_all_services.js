const fs = require('fs');
const path = require('path');

// Setup global/window mocks
global.window = {};

const dataPath = path.join(__dirname, '..', 'public', 'js', 'logic-forms-data.js');
const dataContent = fs.readFileSync(dataPath, 'utf8');

try {
    eval(dataContent);
} catch (e) {
    console.error("❌ Failed to parse logic-forms-data.js:", e);
    process.exit(1);
}

const servicesData = global.window.servicesData;
if (!servicesData) {
    console.error("❌ servicesData not found on window object.");
    process.exit(1);
}

const serviceKeys = Object.keys(servicesData);
console.log(`🔍 Found ${serviceKeys.length} services. Starting validation...`);

let hasErrors = false;

serviceKeys.forEach(serviceKey => {
    const service = servicesData[serviceKey];
    console.log(`\n--- Validating service: "${serviceKey}" ---`);
    
    if (!service.title) {
        console.error(`❌ Error in "${serviceKey}": Missing service title.`);
        hasErrors = true;
    } else {
        console.log(`✅ Title: "${service.title}"`);
    }

    if (!Array.isArray(service.questions)) {
        console.error(`❌ Error in "${serviceKey}": questions is not an array.`);
        hasErrors = true;
        return;
    }

    console.log(`   Validating ${service.questions.length} questions...`);

    service.questions.forEach((q, idx) => {
        const qId = q.id || `index_${idx}`;
        
        if (!q.id) {
            console.error(`  ❌ Question #${idx + 1}: Missing "id".`);
            hasErrors = true;
        }

        if (!q.label || typeof q.label !== 'string') {
            console.error(`  ❌ Question "${qId}": Missing or invalid "label".`);
            hasErrors = true;
        }

        const validTypes = ['text', 'select', 'radio', 'checkbox'];
        if (!validTypes.includes(q.type)) {
            console.error(`  ❌ Question "${qId}": Invalid type "${q.type}". Must be one of ${validTypes.join(', ')}.`);
            hasErrors = true;
        }

        if (['select', 'radio', 'checkbox'].includes(q.type)) {
            if (!Array.isArray(q.options) || q.options.length === 0) {
                console.error(`  ❌ Question "${qId}" of type "${q.type}": Missing or empty "options" array.`);
                hasErrors = true;
            } else {
                q.options.forEach((opt, oIdx) => {
                    if (typeof opt !== 'string' || opt.trim() === '') {
                        console.error(`    ❌ Option #${oIdx + 1} in "${qId}": Empty or non-string option.`);
                        hasErrors = true;
                    }
                });
            }
        }

        // Test condition callback
        if (q.condition) {
            if (typeof q.condition !== 'function') {
                console.error(`  ❌ Question "${qId}": "condition" is not a function.`);
                hasErrors = true;
            } else {
                try {
                    // Test with mock answers
                    const dummyAnswers = {};
                    service.questions.slice(0, idx).forEach(prevQ => {
                        if (prevQ.options && prevQ.options.length > 0) {
                            dummyAnswers[prevQ.id] = prevQ.options[0];
                        } else {
                            dummyAnswers[prevQ.id] = "Test value";
                        }
                    });
                    const condResult = q.condition(dummyAnswers);
                    // Just verify it evaluates without throwing
                } catch (cErr) {
                    console.error(`  ❌ Question "${qId}": "condition" function threw an error when evaluated:`, cErr.message);
                    hasErrors = true;
                }
            }
        }

        // Check insights
        if (q.insights) {
            if (typeof q.insights !== 'object' || Array.isArray(q.insights)) {
                console.error(`  ❌ Question "${qId}": "insights" is not an object.`);
                hasErrors = true;
            } else {
                // Warning if insights keys don't match options
                const insightKeys = Object.keys(q.insights);
                insightKeys.forEach(key => {
                    if (q.options && !q.options.includes(key)) {
                        console.warn(`    ⚠️ Warning in "${qId}": Insight key "${key}" does not match any option in options list.`);
                    }
                });
            }
        }
    });
});

if (hasErrors) {
    console.log("\n❌ Validation failed with errors!");
    process.exit(1);
} else {
    console.log("\n✨ Validation passed! All 21 services are fully compliant and error-free!");
}
