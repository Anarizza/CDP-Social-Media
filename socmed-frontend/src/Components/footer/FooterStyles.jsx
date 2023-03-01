import styled from 'styled-components';

export const Box = styled.div`
	background: #00796b;
	position: absolute;
	bottom: 0px;
	width: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 60px;
`;

export const ColumnIcon = styled.div`
	display: flex;
	margin-left: 60px;
	grid-gap: 40px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const BottomRow = styled.div`
	grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 500px;
	font-weight: bold;
	font-size: 12px;
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 12px;
	text-decoration: none;

	&:hover {
		color: black;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 18px;
	color: #fff;
	margin-bottom: 20px;
	font-weight: bold;
`;

export const AppName = styled.div`
	display: flex;
	margin-left: 0px;
	grid-gap: 0px;
`;