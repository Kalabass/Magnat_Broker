import { useProcessedBlankById } from '@/entities/blank';
import CustomStyledContainer from '@/shared/ui/StyledContainer';
import { ContractForm, ENUM_MODE } from '@/widgets/contractForm';

import { FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const ViewContractPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const { data: BLANK_DATA } = useProcessedBlankById(+id!);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const onSubmitHandler = () => {
		navigate(`${pathname}/edit`);
	};
	return (
		BLANK_DATA && (
			<CustomStyledContainer>
				<ContractForm
					initialData={BLANK_DATA}
					mode={ENUM_MODE.view}
					onSubmitHandler={onSubmitHandler}
				/>
			</CustomStyledContainer>
		)
	);
};
