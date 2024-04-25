import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { devices } from '../../constants/devices';

export const BookmarkStyles = styled.div<{ $active?: boolean }>`
	width: 59px;
	height: 59px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.background};
	border-radius: 50%;
	transition: 0.3s;
	${(props) =>
		props.$active &&
		css`
			background: #f17900;
		`}
	&:hover {
		cursor: pointer;
		background: rgba(251, 215, 178, 100%);
	}
	img {
		width: 24px;
		height: 24px;
	}
	@media ${devices.laptop} {
		width: 48px;
		height: 48px;
		img {
			width: 20px;
			height: 20px;
		}
	}
	@media ${devices.tablet} {
		width: 32px;
		height: 32px;
		&:hover {
			background: ${colors.background};
			user-select: none;
			${(props) =>
				props.$active &&
				css`
					background: ${colors.orange_dark};
				`}
		}
		img {
			width: 16px;
			height: 16px;
		}
	}
`;
