function MyClass(collaborator) {
    this.collaborator = collaborator;
}

MyClass.prototype.run = function () {
    return this.collaborator.collaborate();
};

module.exports = MyClass;
