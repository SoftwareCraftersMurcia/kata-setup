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

    /**
     * @return string
     */
    public function run()
    {
        return $this->collaborator->collaborate();
    }
}
