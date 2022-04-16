import { Button } from "@chakra-ui/button"
import React from "react"

export const CustomButton = ({


	btnText,
	leftIcon,
...props
}) => {
	return (
		<Button
			// fontSize="14px"

			bg="#19A5B0"
			color="white"
			leftIcon={leftIcon}
			_hover={{ bg: "#19A5B0" }}
			size="lg"
			ml={[0, 20]}
			mt={["20px", "-20px"]}
			{...props}
		>
			{btnText}
		</Button>
	)
}
