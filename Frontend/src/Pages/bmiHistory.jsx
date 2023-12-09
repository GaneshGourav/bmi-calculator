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
  } from '@chakra-ui/react'

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
     <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>S.I</Th>
        <Th>BMI</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
   
    </Tbody>
    
  </Table>
</TableContainer>
    </>
  );
};
