import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/inputField";
import { fetchFields, uploadFormData } from "../../redux/actions/fieldAction";
import LoadingButton from "@mui/lab/LoadingButton";

interface fieldData {
  id: number;
  fieldName: string;
  type: string;
  value: string;
  options: Array<string>;
}

function Add() {
  const [formData, setFormData] = useState<fieldData[]>([]);
  const [responseField, setResponseField] = useState();
  const [loading, setLoading] = React.useState(false);

  const handleChange = (text: string, fieldName: string, index: number) => {
    const newList = formData.map((item) => {
      if (item.fieldName === fieldName) {
        const updatedItem = {
          ...item,
          value: text,
        };

        return updatedItem;
      }
      return item;
    });
    setFormData(newList);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFields(callBack));
  }, [dispatch]);

  const callBack = (response: React.SetStateAction<fieldData[]>) => {
    setFormData(response);
  };

  const callBack1 = (response: React.SetStateAction<fieldData[]>) => {
    setLoading(false);
    setResponseField(response);
  };

  const convertArrayToObject = (array: any[], key: string) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item.value,
      };
    }, initialValue);
  };

  const sendFormData = () => {
    setLoading(true);
    const payload = convertArrayToObject(formData, "fieldName");
    dispatch(uploadFormData(payload, callBack1));
  };

  return (
    <div className="flex flex-col items-center min-h-screen align-middle bg-white">
      <div className="bg-purple-500 w-full flex h-[58px] items-center justify-center flex-row">
        <span className="text-[24px] font-semibold text-white">
          Dynamic Form
        </span>
      </div>
      <div className="flex w-[700px] justify-center">
        <div className="flex flex-col justify-between w-full mt-10">
          {formData.length > 0 &&
            formData.map((row: fieldData, index: number) => (
              // eslint-disable-next-line react/jsx-key
              <InputField
                label={row.fieldName}
                value={row.value}
                type={row.type}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event.target.value, row.fieldName, index)
                }
                options={row.options}
                inputMode={undefined}
              />
            ))}
        </div>
      </div>

      <LoadingButton
        size="small"
        sx={{
          marginTop: 5,
        }}
        onClick={sendFormData}
        loading={loading}
        variant="outlined"
      >
        Submit
      </LoadingButton>
      {responseField && (
        <div className="mt-10 w-[700px]">
          <span className="text-[20px] font-bold">Response</span>
          <div className="mt-4">{JSON.stringify(responseField)}</div>
        </div>
      )}
    </div>
  );
}

export default Add;
