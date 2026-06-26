import pty
import os
import time

def try_ssh(password):
    cmd = ['ssh', '-o', 'StrictHostKeyChecking=no', 'root@91.108.113.135', 'echo "CONNECTED_SUCCESSFULLY"']
    pid, fd = pty.fork()
    if pid == 0:
        os.execvp(cmd[0], cmd)
    else:
        output = ""
        timeout = 10
        start_time = time.time()
        while time.time() - start_time < timeout:
            try:
                # Use non-blocking read if possible, or small chunks
                chunk = os.read(fd, 1024).decode('utf-8', errors='ignore')
                output += chunk
                if "password:" in chunk.lower():
                    os.write(fd, (password + "\n").encode())
                if "CONNECTED_SUCCESSFULLY" in output:
                    return True, output
                if "Permission denied" in output:
                    return False, output
            except OSError:
                break
            time.sleep(0.1)
        return False, output

# Try R#
success, out = try_ssh("18934971mhaR#")
print(f"R# Success: {success}")
if not success:
    print(f"R# Output: {out}")
    # Try A@
    success, out = try_ssh("18934971mhaA@")
    print(f"A@ Success: {success}")
    if not success:
        print(f"A@ Output: {out}")
