class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager)
        this.employees = employees
    }
}

module.exports = Manager;
