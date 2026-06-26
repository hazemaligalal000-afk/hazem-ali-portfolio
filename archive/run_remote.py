import pty
import os
import time
import sys

def run_remote(command, password):
    cmd = ['ssh', '-o', 'StrictHostKeyChecking=no', 'root@91.108.113.135', command]
    pid, fd = pty.fork()
    if pid == 0:
        os.execvp(cmd[0], cmd)
    else:
        output = b""
        timeout = 20
        start_time = time.time()
        password_sent = False
        while time.time() - start_time < timeout:
            try:
                # Read output
                chunk = os.read(fd, 4096)
                if not chunk: break
                output += chunk
                
                # Check for password prompt
                if not password_sent and b"password:" in chunk.lower():
                    os.write(fd, (password + "\n").encode())
                    password_sent = True
            except EOFError:
                break
            except OSError:
                break
        
        try:
            os.waitpid(pid, os.WNOHANG)
        except:
            pass
            
        return output.decode('utf-8', errors='ignore')

if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'ls -la /opt/hazem-portfolio'
    print(run_remote(cmd, '18934971mhaA@'))
