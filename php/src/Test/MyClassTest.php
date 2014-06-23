<?php

namespace Foo\Test;

use Foo\MyClass;

class MyClassTest extends \PHPUnit_Framework_TestCase
{

    public function testMyMethodAllwaysReturnsTrue()
    {
        $myClass = new MyClass();
        $this->assertTrue($myClass->myMethod());
    }

}
