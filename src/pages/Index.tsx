import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Уход за лицом",
      description: "Профессиональные процедуры для красоты и здоровья кожи",
      price: "от 3000 ₽",
      icon: "Sparkles"
    },
    {
      title: "Маникюр и педикюр",
      description: "Безупречный уход за ногтями с использованием премиальных средств",
      price: "от 2500 ₽",
      icon: "Heart"
    },
    {
      title: "Массаж",
      description: "Расслабляющие и лечебные массажи для полного восстановления",
      price: "от 4000 ₽",
      icon: "Leaf"
    },
    {
      title: "Визаж",
      description: "Профессиональный макияж для любого случая",
      price: "от 3500 ₽",
      icon: "Crown"
    }
  ];

  const reviews = [
    {
      name: "Анна",
      text: "Превосходный сервис! Мастера настоящие профессионалы",
      rating: 5
    },
    {
      name: "Мария",
      text: "Атмосфера роскоши и комфорта. Всегда довольна результатом",
      rating: 5
    },
    {
      name: "Елена",
      text: "Лучший салон в городе! Рекомендую всем подругам",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-cormorant font-semibold text-luxury-deep-black">
                Нефертити
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-luxury-gold transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-luxury-gold transition-colors">Услуги</a>
              <a href="#promotions" className="text-gray-700 hover:text-luxury-gold transition-colors">Акции</a>
              <a href="#gallery" className="text-gray-700 hover:text-luxury-gold transition-colors">Галерея</a>
              <a href="#reviews" className="text-gray-700 hover:text-luxury-gold transition-colors">Отзывы</a>
              <a href="#about" className="text-gray-700 hover:text-luxury-gold transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-luxury-gold transition-colors">Контакты</a>
            </nav>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-luxury-pearl-white to-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("/img/36d03e23-8910-4343-9d90-30f780b0efd7.jpg")'
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-cormorant font-bold text-luxury-deep-black mb-6">
            Нефертити
          </h1>
          <p className="text-xl md:text-2xl font-montserrat text-luxury-soft-black mb-8 max-w-2xl mx-auto">
            Салон красоты премиум-класса в Липецке. Ваша красота — наша страсть
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-montserrat">
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-montserrat">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-luxury-pearl-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-bold text-luxury-deep-black mb-4">
              Наши услуги
            </h2>
            <p className="text-xl font-montserrat text-luxury-soft-black max-w-2xl mx-auto">
              Широкий спектр услуг красоты от профессиональных мастеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl font-cormorant font-semibold text-luxury-deep-black">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-montserrat text-luxury-soft-black">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-montserrat font-bold text-luxury-gold mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white font-montserrat">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-bold text-luxury-deep-black mb-4">
              Акции и предложения
            </h2>
            <p className="text-xl font-montserrat text-luxury-soft-black max-w-2xl mx-auto">
              Специальные предложения для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/10 border-luxury-gold/20">
              <CardHeader>
                <Badge className="bg-luxury-gold text-white w-fit">Скидка 30%</Badge>
                <CardTitle className="font-cormorant text-2xl text-luxury-deep-black">
                  Первое посещение
                </CardTitle>
                <CardDescription className="font-montserrat">
                  Специальная скидка для новых клиентов на любую процедуру
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white">
                  Воспользоваться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/10 border-luxury-gold/20">
              <CardHeader>
                <Badge className="bg-luxury-gold text-white w-fit">Комплекс</Badge>
                <CardTitle className="font-cormorant text-2xl text-luxury-deep-black">
                  Уход за лицом + массаж
                </CardTitle>
                <CardDescription className="font-montserrat">
                  Полный комплекс процедур со скидкой 20%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/10 border-luxury-gold/20">
              <CardHeader>
                <Badge className="bg-luxury-gold text-white w-fit">Подарок</Badge>
                <CardTitle className="font-cormorant text-2xl text-luxury-deep-black">
                  Подарочные сертификаты
                </CardTitle>
                <CardDescription className="font-montserrat">
                  Идеальный подарок для близких на любую сумму
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white">
                  Оформить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-luxury-pearl-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-bold text-luxury-deep-black mb-4">
              Галерея работ
            </h2>
            <p className="text-xl font-montserrat text-luxury-soft-black max-w-2xl mx-auto">
              Результаты работы наших мастеров
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="all">Все работы</TabsTrigger>
              <TabsTrigger value="face">Лицо</TabsTrigger>
              <TabsTrigger value="nails">Ногти</TabsTrigger>
              <TabsTrigger value="makeup">Макияж</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square relative">
                      <img 
                        src="/img/615463d8-3782-4859-8166-5cc94f4c3d12.jpg" 
                        alt="Результат работы" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="face">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square relative">
                      <img 
                        src="/img/615463d8-3782-4859-8166-5cc94f4c3d12.jpg" 
                        alt="Уход за лицом" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nails">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2].map((index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square relative">
                      <img 
                        src="/img/0f52edc9-e454-4eef-ad0d-ffdc679495af.jpg" 
                        alt="Маникюр" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="makeup">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1].map((index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square relative">
                      <img 
                        src="/img/36d03e23-8910-4343-9d90-30f780b0efd7.jpg" 
                        alt="Макияж" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-bold text-luxury-deep-black mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl font-montserrat text-luxury-soft-black max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-luxury-pearl-white border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
                    ))}
                  </div>
                  <p className="font-montserrat text-luxury-soft-black mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="font-montserrat font-semibold text-luxury-deep-black">
                    {review.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-luxury-pearl-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-cormorant font-bold text-luxury-deep-black mb-6">
                О салоне Нефертити
              </h2>
              <p className="text-lg font-montserrat text-luxury-soft-black mb-6">
                Мы — салон красоты премиум-класса в Липецке, который объединяет в себе 
                традиции и инновации в области красоты и ухода.
              </p>
              <p className="text-lg font-montserrat text-luxury-soft-black mb-6">
                Наша команда состоит из высококвалифицированных мастеров, которые 
                постоянно совершенствуют свои навыки и следят за последними тенденциями 
                в мире красоты.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-2">5+</div>
                  <div className="font-montserrat text-luxury-soft-black">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-2">1000+</div>
                  <div className="font-montserrat text-luxury-soft-black">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/36d03e23-8910-4343-9d90-30f780b0efd7.jpg" 
                alt="Салон Нефертити" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-bold text-luxury-deep-black mb-4">
              Контакты
            </h2>
            <p className="text-xl font-montserrat text-luxury-soft-black max-w-2xl mx-auto">
              Свяжитесь с нами или приходите в гости
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-luxury-pearl-white border-0">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-luxury-deep-black">Адрес</h3>
                        <p className="font-montserrat text-luxury-soft-black">г. Липецк, ул. Советская, 45</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-luxury-deep-black">Телефон</h3>
                        <p className="font-montserrat text-luxury-soft-black">+7 (4742) 123-456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                        <Icon name="Clock" className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-luxury-deep-black">Время работы</h3>
                        <p className="font-montserrat text-luxury-soft-black">Пн-Вс: 09:00 - 21:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                        <Icon name="Mail" className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-luxury-deep-black">Email</h3>
                        <p className="font-montserrat text-luxury-soft-black">info@nefertiti-lipetsk.ru</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-luxury-pearl-white border-0">
                <CardHeader>
                  <CardTitle className="font-cormorant text-2xl text-luxury-deep-black">
                    Записаться на прием
                  </CardTitle>
                  <CardDescription className="font-montserrat">
                    Оставьте заявку и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="font-montserrat text-sm font-medium text-luxury-deep-black">Имя</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-montserrat text-sm font-medium text-luxury-deep-black">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-montserrat text-sm font-medium text-luxury-deep-black">Услуга</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                      <option>Выберите услугу</option>
                      <option>Уход за лицом</option>
                      <option>Маникюр</option>
                      <option>Педикюр</option>
                      <option>Массаж</option>
                      <option>Визаж</option>
                    </select>
                  </div>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white font-montserrat">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-deep-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-cormorant font-bold text-luxury-gold mb-4">Нефертити</h3>
              <p className="font-montserrat text-gray-300">
                Салон красоты премиум-класса в Липецке
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 font-montserrat text-gray-300">
                <li>Уход за лицом</li>
                <li>Маникюр и педикюр</li>
                <li>Массаж</li>
                <li>Визаж</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 font-montserrat text-gray-300">
                <li>г. Липецк, ул. Советская, 45</li>
                <li>+7 (4742) 123-456</li>
                <li>info@nefertiti-lipetsk.ru</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="w-6 h-6 text-luxury-gold hover:text-white cursor-pointer" />
                <Icon name="Facebook" className="w-6 h-6 text-luxury-gold hover:text-white cursor-pointer" />
                <Icon name="MessageCircle" className="w-6 h-6 text-luxury-gold hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center font-montserrat text-gray-400">
            © 2024 Салон красоты Нефертити. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;