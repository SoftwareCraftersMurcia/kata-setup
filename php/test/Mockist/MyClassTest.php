<?php

namespace Foo\Test\Mockist;

use Foo\Mockist\Collaborator;
use Foo\Mockist\MyClass;
use Prophecy\PhpUnit\ProphecyTestCase;

class MyClassTest extends ProphecyTestCase
{
    /**
     * Mock
     * @test
     */
    public function shouldUseTheExternalCollaborator()
    {
        $myCollaboratorProphecy = $this->prophesize('Foo\Mockist\Collaborator');
        /** @var Collaborator $collaborator */
        $collaborator = $myCollaboratorProphecy->reveal();
        $myClass = new MyClass($collaborator);

        $myClass->run();

        $myCollaboratorProphecy->collaborate()->shouldBeCalled();
    }

    /**
     * Stub
     * @test
     */
    public function shouldReturnTheCollaboratorResponse()
    {
        $myCollaboratorProphecy = $this->prophesize('Foo\Mockist\Collaborator');
        $collaboratorResponse = 'collaborator response';
        $myCollaboratorProphecy->collaborate()->willReturn($collaboratorResponse);
        /** @var Collaborator $collaborator */
        $collaborator = $myCollaboratorProphecy->reveal();
        $myClass = new MyClass($collaborator);

        $response = $myClass->run();

        $this->assertEquals($collaboratorResponse, $response);
    }
}
