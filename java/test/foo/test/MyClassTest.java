package foo.test;

import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

import foo.MyClass;

public class MyClassTest {

	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void testClassWorking() {
		MyClass myClass = new MyClass();
		assertTrue(myClass.myFirstTestMethod());
	}

}
