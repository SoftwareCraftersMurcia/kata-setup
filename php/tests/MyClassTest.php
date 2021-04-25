<?php

namespace Kata\Test;

use Kata\TheClass;
use PHPUnit\Framework\TestCase;

class MyClassTest extends TestCase
{
    /** @test */
    public function give_me_a_good_name_please(): void
    {
        $xxx = new TheClass();

        $result = $xxx->theMethod();

        self::assertEquals(true, $result);
    }
}
