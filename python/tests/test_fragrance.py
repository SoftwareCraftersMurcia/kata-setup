from src.change_me import ChangeMe


class TestFragrance:

    def test_change_me(
        self,
    ):
        # Given
        my_class = ChangeMe()
        # When

        # Then
        assert my_class.change_me() == True
