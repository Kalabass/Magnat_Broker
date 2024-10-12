import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { useFormContext } from 'react-hook-form';

const useIsLegal = () => {
	const { watch } = useFormContext();
	const isLegal: boolean = watch(FormFieldNamesMap.clientIsLegal);
	return isLegal;
};

export default useIsLegal;