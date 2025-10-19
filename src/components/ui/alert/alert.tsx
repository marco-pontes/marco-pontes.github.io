import { Alert as CAlert } from "@chakra-ui/react";
import type { AlertProps, FunctionComponent } from "@/types/types.ts";

export const Alert = ({ type, message }: AlertProps): FunctionComponent => {
	return (
		<CAlert.Root status={type}>
			<CAlert.Indicator />
			<CAlert.Title>{message}</CAlert.Title>
		</CAlert.Root>
	);
};
