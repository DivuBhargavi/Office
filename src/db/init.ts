import Employee from './model/task_6';

async function init() {
    const isDev = true;

    await Employee.sync({ alter: isDev });
}

const dbInit = () => {
    init();
}

export default dbInit;
