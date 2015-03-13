<?php

namespace Foo\Test\Classic;

use Foo\Classic\MyClass;

class MyClassTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @test
     */
    public function shouldReturnTrueMyMethod()
    {
        $myClass = new MyClass();

        $result = $myClass->myMethod();

        $this->assertTrue($result);
    }
}
