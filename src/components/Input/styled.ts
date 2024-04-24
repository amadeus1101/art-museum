import styled, { css } from 'styled-components';
import { theme } from '../../constants/theme';
import { devices } from '../../constants/devices';

export const InputStyles = styled.div<{ $isloading: boolean }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	form {
		max-width: 762px;
		width: 100%;
		padding: 16px;
		display: flex;
		align-items: center;
		position: relative;
		background: rgba(57, 57, 57, 5%);
		border-radius: 16px;
		border: none;
		label {
			position: absolute;
			left: 0;
			top: -20px;
			font-family: 'InterRegular';
			font-size: 14px;
			color: red;
		}
		input {
			width: calc(100% - 32px);
			text-align: left;
			font-family: 'InterRegular';
			font-size: 14px;
			color: ${theme.colors.black};
			border: none;
			background: transparent;
		}
		input {
			&:focus {
				outline: none;
			}
		}
		button {
			border: none;
			background: transparent;
			&:hover {
				cursor: pointer;
			}
			img {
				width: 32px;
				height: 32px;
			}
		}
	}
	@media ${devices.tablet} {
		form {
			padding: 8px;
			border-radius: 8px;
			label {
				font-size: 12px;
			}
			input {
				width: calc(100% - 16px);
				font-size: 12px;
			}
			button img {
				width: 16px;
				height: 16px;
			}
		}
	}
	${(props) =>
		props.$isloading &&
		css`
			opacity: 0.5;
			form {
				input,
				button {
					user-select: none;
				}
			}
		`}
`;
