package pkg

import (
	"testing"
)

func TestHelloUser(t *testing.T){
	user := "Kata"
	got := HelloUser(user)
	want := "Hello Kata"

	if got != want {
		t.Errorf("Expected %s, got %s instead\n", want, got)
	}
}
