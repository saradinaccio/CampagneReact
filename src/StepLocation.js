import React, { useState } from "react";
import { Row, Col, Divider, Select, Radio, Card, Button } from "antd";
import { Link } from "@reach/router";

export const StepLocation = () => {
  const { Option } = Select;
  const [selectedOptions, setPlainOptions] = useState("internoNegozio");

  const option = [
    { label: "Interno del negizio", value: "internoNegozio" },
    { label: "In Prossimit", value: "inProssimit" },
    { label: "200 m", value: "200m" },
    { label: "500 m", value: "500m" },
    { label: "1 Km", value: "1km" },
    { label: "5 Km", value: "5km" },
    { label: "30 Km", value: "30km" }
  ];

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChangeOption = e => {
    console.log("radio1 checked", e.target.value);
    setPlainOptions(e.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Nuova Campagna</h1>
      <Divider></Divider>
      <div className="gutter-example">
        <Row gutter={16}>
          <Col span={6}>
            <div style={{ border: 5 }}>
              <h1 style={{ textAlign: "center" }}>Step 1</h1>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div>
              <h1 style={{ textAlign: "center" }}>Step 2</h1>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <h1 style={{ textAlign: "center" }}>Step 3</h1>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <h1 style={{ textAlign: "center" }}>Step 4</h1>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row style={{ height: 10 }} gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <p style={{ textAlign: "center", textSizeAdjust: 8 }}>
                Step Location
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <p style={{ fontWeight: "bold" }}>Country</p>
        <Select
          defaultValue="it-IT"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="it-IT">it-IT</Option>
          <Option value="us-US"> us-US</Option>
        </Select>
        <br></br>
        <p></p>
        <Row>
          <Col span={4}>Tipologia POS</Col>
          <Col span={4}>POS</Col>
        </Row>
        <Row>
          <Col span={4}>
            <Select
              defaultValue="Boutique"
              style={{ width: 160 }}
              onChange={handleChange}
            >
              <Option value="Boutique">Boutique</Option>
              <Option value="Altro">Altro</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              defaultValue="sanGiovanni"
              style={{ width: 160 }}
              onChange={handleChange}
            >
              <Option value="sanGiovanni">Piazza San Giovanni, 17</Option>
              <Option value="Altro"> us-US</Option>
            </Select>
          </Col>
        </Row>
        <br></br>
        <p style={{ fontWeight: "bold" }}>Distanza dal negozio</p>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <Radio.Group
          options={option}
          onChange={onChangeOption}
          value={selectedOptions}
        ></Radio.Group>
      </div>
      <div style={{ paddingLeft: 100 }}>
        <br></br>
        <Card title="Prodotti disponibili nell'area" style={{ width: 800 }}>
          <Row>
            <Col span={6}>Tipo Zona</Col>
            <Col span={6}>Distanza logica da entrata</Col>
            <Col span={6}>Distanza logica da uscita</Col>
          </Row>
          <div>
            <br></br>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="Camerino"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="Camerino">Camerino</Option>
                  <Option value="Urbino">Urbino</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="a30m"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="a30m">a 30 metri da ..</Option>
                  <Option value="a50m">a 50 metri da ..</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="a30m"
                  style={{ width: 160 }}
                  onChange={handleChange}
                >
                  <Option value="a30m">a 30 metri da ..</Option>
                  <Option value="a50m">a 50 metri da ..</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
        <p></p>
        <div>
          <Card title="Zona" style={{ width: 800 }}>
            <Row>
              <Col span={6}>Tipologia merceologica</Col>
              <Col span={6}>Classe merceologica</Col>
              <Col span={6}>Sottoclasse merceologica</Col>
            </Row>
            <div>
              <br></br>
              <Row>
                <Col span={6}>
                  <Select
                    defaultValue="Abbigliamento"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Abbigliamento">Abbigliamento</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="Abito"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Abito">Abito</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    defaultValue="Mini"
                    style={{ width: 160 }}
                    onChange={handleChange}
                  >
                    <Option value="Mini">Mini</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <br></br>
        <p></p>

        <div>
          <Row>
            <Col span={6}>
              <Link to="/StepTempo">
                <Button>Indietro</Button>
              </Link>
            </Col>
            <Col span={6}></Col>
            <Col span={6}></Col>

            <Col span={6}>
              <Link to="/StepUtente">
                <Button>Avanti</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
