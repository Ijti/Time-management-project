tasks = []
def add_task(task):
    tasks.append(task)

def view_tasks():
    for i, task in enumerate(tasks):
        print(f"{i+1}. {task}")

def mark_task_complete(index):
    tasks[index] = f"
