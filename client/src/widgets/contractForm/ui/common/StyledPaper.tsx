import { Paper, PaperProps, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
	borderRadius: theme.spacing(1),
	padding: theme.spacing(5),
}));

interface CustomStyledPaperProps {
	children: ReactNode;
}

const CustomStyledPaper: FC<CustomStyledPaperProps> = ({ children }) => {
	return <StyledPaper component={'section'}>{children}</StyledPaper>;
};

export default CustomStyledPaper;
