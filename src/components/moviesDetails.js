//Components
import { Col, Row } from "antd";

const MovieDetails = (props) => {
    const record = props.record;
    console.log(record);

    return (
        <Row>
            <Col>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img
                        alt={'movie image'}
                        style={{ width: '200px', height: 'auto' }}
                        src={record.show.image && record.show.image.original}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            background: 'rgba(0, 0, 0, 0.5)',
                            color: '#fff',
                            padding: '10px',
                        }}
                    >
                        <h3>{record.show && record.show.name}</h3>
                        <p>{record.show && record.show.description}</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default MovieDetails;