import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/Authentication/action";
import {
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
} from "../redux/Authentication/actionTypes";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const BmiHostory = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData())
      .then((res) => {
        dispatch({ type: GET_DATA_SUCCESS, data: res.data });
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ERROR });
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <>
      <TableContainer width={"40%"} margin={"auto"} border={"1px solid teal"} borderRadius={"5px"} marginTop={"30px"}>
        <Table variant="striped" colorScheme="teal" size='md'>
          <TableCaption>BMI History</TableCaption>
          <Thead margin={"auto"}>
            <Th>S.I</Th>
            <Th>BMI</Th>
            <Th>Status</Th>
          </Thead>
          <Tbody>
            {data.map((el) => (
              <Tr>
                <Td>{el.id}</Td>
                <Td>{el.bmi}</Td>
                <Td>{el.bmiCategory}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
