package Mockist;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Test;

public class MyClassTest {

	@Test
	public void shouldInteractWithTheMock() {
		Collaborator collaborator = mock(Mockist.Collaborator.class);		
		MyClass myClass = new MyClass(collaborator);
		
		myClass.run();
		
		verify(collaborator).collaborate();
	}
	
	@Test
	public void shouldRetrieveTheStubResponse(){
		Collaborator collaborator = mock(Mockist.Collaborator.class);		
		String collaboratorResponse = "collaborator response";
		when(collaborator.collaborate()).thenReturn(collaboratorResponse);
		MyClass myClass = new MyClass(collaborator);
		
		String result = myClass.run();
		
		assertEquals(result, collaboratorResponse);
		}
}

