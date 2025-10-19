import { Alert as CAlert } from "@chakra-ui/react";
import type { FunctionComponent } from "@/types/types";

enum AlertType {
	INFO = "info",
	WARNING = "warning",
	SUCCESS = "success",
	ERROR = "error",
	NEUTRAL = "neutral",
}

type AlertProps = { type: AlertType; message: string };

export const Alert = ({ type, message }: AlertProps): FunctionComponent => {
	return (
		<CAlert.Root status={type}>
			<CAlert.Indicator />
			<CAlert.Title>{message}</CAlert.Title>
		</CAlert.Root>
	);
};
