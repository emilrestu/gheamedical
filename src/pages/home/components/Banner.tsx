import BookServiceCard from '@/components/book-service-card';
import { Carousel, Row, Col } from 'antd';

const Banner = () => {
    const ArrImage = Array.from({ length: 2 }).map((_, i) => ({ index: i, alt: `image-${i}`, src: `./source/image-${i}` }));

    return (
        <Row className="banner-container">
            <Col span={24}>
                <Carousel arrows={false} dots={false} draggable autoplay>
                    {ArrImage.map((item, index) => (
                        <div key={index}>
                            <div className="banner-card-wrapper">
                                <div className="banner-card">{item.alt}</div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </Col>

            <BookServiceCard />
        </Row>
    );
};

export default Banner;
