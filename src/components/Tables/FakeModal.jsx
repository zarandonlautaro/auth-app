import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Semana 1', value: 1 },
  { name: 'Semana 2', value: 2 },
  { name: 'Semana 3', value: 3 },
  { name: 'Semana 4', value: 2 },
  { name: 'Semana 5', value: 2 },
  { name: 'Semana 6', value: 5 },
];

export default function FakeModal({ isOpen, toggle }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Accesos</ModalHeader>
      <ModalBody>
        Cantidad de accesos
        <div style={{ height: '250px' }}>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart width={400} height={400}>
              <Pie
                dataKey='value'
                isAnimationActive={false}
                data={data01}
                cx='50%'
                cy='50%'
                outerRadius={80}
                fill='#8884d8'
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={toggle}>
          Guardar
        </Button>{' '}
        <Button color='secondary' onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
