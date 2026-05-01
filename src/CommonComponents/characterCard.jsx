import 'antd/dist/reset.css';
import { Card, Tag, Typography } from "antd";

const { Text, Title } = Typography;

const statusColorMap = {
  Alive: "green",
  Dead: "red",
  unknown: "default",
};

const CharacterCard = ({ char }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={char.name}
          src={char.image}
          style={{ height: 250, objectFit: "cover" }}
        />
      }
      style={{ borderRadius: 12 }}
    >
      <Title level={5}>{char.name}</Title>
      <Tag color={statusColorMap[char.status] || "default"}>
        {char.status} - {char.species}
      </Tag>
      <div style={{ marginTop: 10 }}>
        <Text type="secondary">Last known location:</Text>
        <br />
        <Text>{char.location.name}</Text>
        <br /><br />
        <Text type="secondary">First seen in:</Text>
        <br />
        <Text>{char.origin.name}</Text>
      </div>
    </Card>
  );
};

export default CharacterCard;