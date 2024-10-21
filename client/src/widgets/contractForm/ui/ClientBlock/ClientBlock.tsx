import { FC } from 'react';
import CustomStyledPaper from '../common/StyledPaper';
import ClientForm from './ClientForm/ClientForm';

const ClientBlock: FC = () => {
	return (
		<CustomStyledPaper>
			<ClientForm />
		</CustomStyledPaper>
	);
};

export default ClientBlock;
