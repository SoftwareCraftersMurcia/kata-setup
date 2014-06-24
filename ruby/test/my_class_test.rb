
$:.unshift File.join(File.dirname(__FILE__),'..','lib')

require_relative '../src/my_class'
require 'test/unit'

class MyClassTest < Test::Unit::TestCase

  def test_foo
    @myClass = MyClass.new
    assert_equal(true, @myClass.my_method)
  end
end
