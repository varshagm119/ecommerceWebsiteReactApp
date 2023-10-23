<Card key={product.id} className="mb-4" style={{width: '18rem'}}>
                            <Card.Header>{product.title}</Card.Header>
                            <Card.Img src={product.imageUrl}  variant="top"/>
                            <Card.Body>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="primary">ADD TO CART</Button>
                            </Card.Body>
                        </Card> 