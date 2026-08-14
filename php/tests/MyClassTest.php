<?php declare(strict_types=1);

namespace KataTests;

use Kata\TheClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class MyClassTest extends TestCase
{
    #[Test]
    public function give_me_a_good_name_please(): void
    {
        $xxx = new TheClass();

        $result = $xxx->theMethod();

        self::assertEquals(true, $result);
    }
}
