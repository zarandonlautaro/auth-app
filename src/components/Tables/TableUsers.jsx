import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row, Table, Button } from 'reactstrap';
import FakeModal from './FakeModal';
import { getDayMonthYear } from '../../utils/formHelpers';
import { IoIosTrash, IoIosCreate, IoIosEye } from 'react-icons/io';
import { confirmDelete } from '../UIHelpers/confirmAlert';
import TableHeader from './TableHeader';
import useSortableData from '../../hooks/useSortableData/useSortableData';
import './table.css';

const TableUser = (props) => {
  const { history, handleUsers } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { items, requestSort, sortConfig } = useSortableData(
    props.users,
    'name',
  );

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const editUser = (idUser) => history.push(`/edit/${idUser}`);

  return (
    <Table dark className='rounded' responsive>
      <thead>
        <tr>
          <th>#</th>
          <TableHeader
            text='First Name'
            onClick={() => requestSort('name')}
            orderBy={getClassNamesFor('name')}
          />
          <TableHeader
            text='Last Name'
            onClick={() => requestSort('lastname')}
            orderBy={getClassNamesFor('lastname')}
          />
          <TableHeader
            text='DNI'
            onClick={() => requestSort('dni')}
            orderBy={getClassNamesFor('dni')}
          />
          <TableHeader
            text='Address'
            onClick={() => requestSort('address')}
            orderBy={getClassNamesFor('address')}
          />
          <TableHeader
            text='Birthday'
            onClick={() => requestSort('age')}
            orderBy={getClassNamesFor('age')}
          />
          <TableHeader
            text='Registered'
            onClick={() => requestSort('date')}
            orderBy={getClassNamesFor('date')}
          />
          <th className='text-center'>Options</th>
        </tr>
      </thead>
      <tbody>
        <FakeModal isOpen={modal} toggle={toggle} />
        {items.map((user, i) => (
          <tr key={user._id}>
            <th onClick={toggle} scope='row'>
              {i + 1}
            </th>
            <td onClick={toggle}>{user.name}</td>
            <td onClick={toggle}>{user.lastname}</td>
            <td onClick={toggle}>{user.dni}</td>
            <td onClick={toggle}>{user.address}</td>
            <td onClick={toggle}>{getDayMonthYear(user.age)}</td>
            <td onClick={toggle}>{getDayMonthYear(user.date)}</td>
            <td>
              <Row>
                <Col className='text-center'>
                  <Button
                    color='success'
                    className='text-white ml-1'
                    onClick={toggle}
                  >
                    <IoIosEye />
                  </Button>
                  <Button
                    color='warning'
                    className='text-white ml-1'
                    onClick={() => editUser(user._id)}
                  >
                    <IoIosCreate />
                  </Button>
                  <Button
                    color='danger'
                    className='text-white ml-1'
                    onClick={() =>
                      confirmDelete(
                        user._id,
                        user.name,
                        user.lastname,
                        handleUsers,
                      )
                    }
                  >
                    <IoIosTrash />
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default withRouter(TableUser);
