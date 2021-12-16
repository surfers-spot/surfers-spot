import React from 'react';
import { Icon, Container, Header, Image, Segment, Card } from 'semantic-ui-react';

export default class Lessons extends React.Component {

  render() {
    return (
      <div className="lessonBackground">
        <br/>
        <Header inverted id="lessons-page" as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>LESSONS</Header>
        <Segment vertical>
          <Container>
            <Card.Group itemsPerRow={4}>

              <Card color='red'>
                <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/b39ovg-pWKzQXMjWuS1qsw/l.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="http://tygurneysurfschool.com/">Ty Gurney Surf School</a></Card.Header>
                  <Card.Meta>8:00 AM - 4:00 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;Located in the heart of Waikiki, Ty Gurney Surf School is Oahu’s premier location for surf lessons, surf tours, rentals,
                    and more for all ages and abilities. We love to surf, and we’re ready to share our passion and knowledge with you.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 271-9557
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    205 Lewers St The Imperial Resort Waikiki Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/ggw0ZlzDt7Hb9s4PJ5uaIg/o.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://mickeysurfschool.com//">Mickey&apos;s Surf School</a></Card.Header>
                  <Card.Meta>6:00 AM - 10:30 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;I have always had a real passion for the ocean and for people. Out of this, my life has grown & evolved into teaching
                    surfing and all types of water sports to complete strangers! Most people quickly realize after meeting me that I am genuine
                    Aloha through and through…that it’s really in my DNA. I constantly strive for quality, not quantity in my surf lessons.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 218-5238
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    2425 Kalakaua Ave Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/5jFscU4JcRMxPVya-gv2Rw/l.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://bigwavedave.com/">Big Wave Dave</a></Card.Header>
                  <Card.Meta>8:00 AM - 2:30 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;At Big Wave Dave, we encourage all ages and skill levels to come out and enjoy the ocean. Whether you are a seasoned
                    surfer looking for local knowledge about the best breaks or a brand new surfer ready to catch your first wave, our instructors
                    are ready to get you outfitted and in the water.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 386-4872
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    226 Lewers St Ste 154 Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/3zxz3-NfW1jN9edCK9QUpA/o.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://www.ohanasurfproject.com/">Ohana Surf Project</a></Card.Header>
                  <Card.Meta>8:30 AM - 5:30 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;We provide a personalized learning experience. A team of expert, multilingual surfing pros are your instructors
                    for your surf lesson in Waikiki. We offer a comprehensive curriculum of basic and advanced techniques with an instructional
                    session customized to your age, skill level, and personal goals.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 599-7873
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    2699 Kalakaua Ave Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/6o1fe6-WaiyPyrkseMRAjA/o.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://www.mokuhawaii.surf/">Moku Hawaii</a></Card.Header>
                  <Card.Meta>6:00 AM - 8:30 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;A block away from famous Waikiki Beach, there&apos;s no better place to go for all things surfing than Moku Hawaii.
                    They rent out only the highest quality surfboards and carry the latest styles so customers can enjoy surfing with the newest trends.
                    Whether someone is looking to give a short board, long board, or a body board a try, they&apos;ve got it all in addition to
                    beach-ready swimsuits, eye wear, footwear, clothing and more. Combining their love for surfing with great expertise and service,
                    all that&apos;s left is to grab a board and paddle out. Tone: Laid back and welcoming.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 926-6658
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    2446 Koa Ave Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://images.squarespace-cdn.com/content/v1/5dda8cdf7ad0d13457755997/1580259631162-L0WMTM04PU5M1JWJB4QO/hawaii-surf-guru-mobile-banner-4.jpg?format=1500w' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://www.hawaiisurfguru.com/">Hawaii Surf Guru</a></Card.Header>
                  <Card.Meta>7:00 AM - 5:00 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;Private Surf Lessons, Stand Up Paddling Lessons & Private Tours with a Professional Waterman or Waterwoman in Oahu Hawaii
                    Getting in touch with the local surf scene and culture in Oahu Hawaii can be an enriching experience. Kimo Chung, the Hawaii Surf
                    Guru provides all the insight and local information that you need in addition to just surf lessons in Oahu Hawaii. Kimo says, &quot;For
                    many of us; surfing has become a way of life. When the surf is good, many of us become more humble and relaxed with ourselves and others.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 283-0088
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    Ala Moana Bowls Parking Lot Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://fh-sites.imgix.net/sites/1876/2020/10/05165643/FAMILY-ISAIAH-BOARDIES-min-scaled-e1601917067122.jpg?auto=compress%2Cformat&fit=crop&crop=faces&w=600&h=450' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://www.monizfamilysurf.com/">Moniz Family Surf</a></Card.Header>
                  <Card.Meta>8:30 AM - 6:30 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;Our desire is to give you an authentic Hawaiian Surf Experience from one of the members of our family. All our instructors
                    are certified licensed and have surfed all their lives, competed in professional surf events and are sponsored by Billabong for the last
                    15 years. We rent boards as well and are right across the street of the Duke Statue and the world renowned surf spot Queens and Canoes.
                    Throw a stone and you are there.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 931-6263
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    101 Uluniu Ave Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

              <Card color='red'>
                <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/Qv0XgFlV7OwtpeOM03VdUw/o.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header><a href="https://hhsurf.com/">Hans Hedemann Surf School-Waikiki</a></Card.Header>
                  <Card.Meta>8:30 AM - 5:00 PM Everyday</Card.Meta>
                  <Card.Description>
                    &quot;Whether you want to take a lesson or rent a surfboard, Hans Hedemann has you covered. Our award-winning staff will
                    guide you through the waves and teach you all the necessary skills. Waikiki Beach are some of the most iconic places to
                    take your first surfing lesson. You will enjoy the beautiful backdrop of Waikiki Whether you are . beginner, intermediate
                    or advanced surfer, our lessons will benefit you. You are guaranteed to be surfing within the two-hour lesson.&quot;
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='phone' />
                    (808) 924-7778
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='location arrow' />
                    150 Kapahulu Ave Honolulu, HI 96815
                  </a>
                </Card.Content>
              </Card>

            </Card.Group>
          </Container>
        </Segment>
      </div>
    );
  }
}
