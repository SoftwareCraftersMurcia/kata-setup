package Mockist;

public class MyClass {

	private Collaborator collaborator;

	public MyClass(Collaborator collaborator) {
		this.collaborator = collaborator;
	}
	
	public String run() {
		return this.collaborator.collaborate();
	}

}
