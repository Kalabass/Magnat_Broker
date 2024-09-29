import { useBlankStore } from '@/shared/stores/useBlankStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import CustomSelect from '../CustomSelect';
import { itemData } from '../GeneralInfoBlock';

interface BlankNumberBlock {
	items: itemData[];
}

const BlankNumberBlock: FC<BlankNumberBlock> = ({ items }) => {
	const { getBlank, updateBlankField } = useBlankStore();
	const blank = getBlank();
	return (
		<>
			<Grid item xs={4}>
				<Typography>Полис</Typography>
			</Grid>
			<Grid item container xs={8} spacing={1}>
				{blank.insuranceTypeId !== 4 && (
					<Grid item xs={3}>
						<CustomSelect
							label='номер'
							items={items}
							onChangeHandler={(value) => {
								updateBlankField('blankSeriesId', value);
							}}
						/>
					</Grid>
				)}
				<Grid item xs={blank.insuranceTypeId === 4 ? 12 : 9}>
					<CustomTextField
						onBlurHandler={(value: string) => {
							updateBlankField('number', value);
						}}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default BlankNumberBlock;
