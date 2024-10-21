import { Container, styled } from '@mui/material';
import { FC } from 'react';

const StyledContainer = styled(Container)(({ theme }) => ({
	backgroundColor: 'lightBlue',
	padding: `${theme.spacing(5)} 0 ${theme.spacing(5)} 0`,
	marginTop: theme.spacing(8),
}));

interface StyledContainerProps {
	children: React.ReactNode;
}

const CustomStyledContainer: FC<StyledContainerProps> = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default CustomStyledContainer;
