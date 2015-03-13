<?php


namespace Foo\Mockist;

class MyClass
{
    /**
     * @var Collaborator
     */
    private $collaborator;

    public function __construct(Collaborator $collaborator)
    {
        $this->collaborator = $collaborator;
    }

    public function run()
    {
        $this->collaborator->collaborate();
    }
}
