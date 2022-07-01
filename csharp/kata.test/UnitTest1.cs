namespace kata.test;

//Example first test using xUnit, FluentAssertions and NSubistitute
//Commented things are only an example.
public class UnitTest1
{
    //Example Mock using NSubstitute
    //private readonly SomeController _sut; //sut is systemUnderTest, use the name that you want 
    //private readonly ISomeService _someService = Substitute.For<ISomeService>();

    //Constructor is as StartUp 
    public UnitTest1()
    {
        //Example using created mock
        //_sut = new SomeController(_someService);
    }

    //Example first test
    [Fact]
    public void Test1()
    {
        // Basic mock with NSubstitute:
        //arrange
        // _someService.SomeMethod(Parameters).Returns(return value);
        // _someService.SomeMethod2(Arg.Any<Guid>()).ReturnsNull();

        //act
        // var response = _sut.SomeMethodController();

        //assert
        // response.Should()..... 

        //Example Using FluentAssertion
        bool firstTest = false;
        firstTest.Should().Be(true);
    }
}
