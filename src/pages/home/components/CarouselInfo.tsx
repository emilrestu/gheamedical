import { theme, Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: 'calc(90vh - 100px)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const CarouselInfo = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    return (
        <Carousel arrows={false} dots={false} draggable autoplay>
            <div>
                <h3 style={{ ...contentStyle, background: colorPrimary }}>1</h3>
            </div>
            <div>
                <h3 style={{ ...contentStyle, background: colorPrimary }}>2</h3>
            </div>
            <div>
                <h3 style={{ ...contentStyle, background: colorPrimary }}>3</h3>
            </div>
            <div>
                <h3 style={{ ...contentStyle, background: colorPrimary }}>4</h3>
            </div>
        </Carousel>
    );
};

export default CarouselInfo;
