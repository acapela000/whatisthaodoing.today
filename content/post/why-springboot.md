---
author: "Thao"
title: "Why using Spring Boot for my first application"
date: "2023-03-12"
summary: "Beginning with numerous questions about the benefits of utilizing Spring Boot, I embarked on a journey to further comprehend the extensive and multifaceted capabilities of this versatile framework."
tags: [
    "projects",
    "weather-forecast",
    "My-first-APP",
]
toc: true
thumbnail: "https://www.mattianatali.it/static/f92c9ba1862b3cdd99d4928d52992aa2/3e393/intellij-spring-boot.jpg"
---


## Why Choose Spring Boot for My First Application

As a beginner in Java development, choosing the right framework may look like overwhelming. However, Spring Boot made thing become easier. Spring Boot is a popular framework that simplifies web application development in Java. After building [my first application](/tags/my-first-app/), I discovered the numerous benefits of using Spring Boot, including: 

### 1. Easy Configuration

Spring Boot's intuitive configuration approach simplifies setting up applications, eliminating the need for a lot of boilerplate code. In real-life projects, I can easily set up database connections by adding a few lines of code to the `application.properties` file.

To illustrate, here are two examples:

**First,** to set up a PostgreSQL database connection:

1.Add the PostgreSQL connector dependency to the `build.gradle` file:

```java
var postgreSQLVersion = "42.5.4"

dependencies {
// https://mvnrepository.com/artifact/org.postgresql/postgresql
	implementation "org.postgresql:postgresql:${postgreSQLVersion}"
}
```

2.Add the following properties to the `application.properties` file to configure the database connection:

```java
spring.security.oauth2.resourceserver.jwt.issuer-uri=https://dev-8xqmdxvrwga5qmoz.us.auth0.com/
spring.security.oauth2.resourceserver.jwt.audience=http://localhost:8080/
spring.jpa.hibernate.ddl-auto=create
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=dbusername
spring.datasource.password=dbpassword
spring.jpa.open-in-view=false

```

In this example, I'm setting the database URL, username, and password for PostgreSQL. 

3.In the Java code, at controller I'm also injecting the `EntityManagerFactory` into my code using Spring Boot's `@Autowired` annotation to get the context with which I will create `entityManager` as `@PersistenceContext` for later being used to execute an `SELECT` statement to get a `Role` object from the database at repository.

From `RoleController`

```java
@Autowired
public RoleController(EntityManagerFactory entityManagerFactory) {
    this.db = new RoleDatabase(entityManagerFactory);
}
```

From `RoleRepository`

```java
@PersistenceContext
private EntityManager entityManager;

public RoleDatabase(EntityManagerFactory entityManagerFactory) {
    this.entityManager = entityManagerFactory.createEntityManager();
}

@Override
public List<Role> getList(int limit) {
    return entityManager.createQuery("select r from Role r", Role.class)
            .setMaxResults(limit)
            .getResultList();
}
```

**Second,** to set up payment gateway integrations in an e-commerce application:

1.Add the payment gateway SDK dependency to the `pom.xml` file:

```xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>payment-gateway-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

2.Configure the payment gateway properties in the `application.properties` file:

```java
payment.gateway.url=https://example.com/payment
payment.gateway.username=your-username
payment.gateway.password=your-password
```

In this example, I am setting the URL of the payment gateway endpoint, as well as the authentication credentials required to access it.

3.In the Java code, use the payment gateway SDK to process payments:

```java
@Autowired
private PaymentGatewayClient paymentGatewayClient;

public void processPayment(Order order) {
    PaymentRequest paymentRequest = new PaymentRequest(order.getTotalAmount(), order.getCurrency());
    PaymentResponse paymentResponse = paymentGatewayClient.processPayment(paymentRequest);
    if (paymentResponse.isSuccess()) {
        order.setStatus("PAID");
        // update order status in the database
    } else {
        order.setStatus("FAILED");
        // update order status in the database
    }
}
```

Here, I'm injecting the `PaymentGatewayClient` bean into my code using Spring Boot's `@Autowired` annotation, and then using it to process a payment for an `Order` object. I'm also updating the status of the order in the database based on the outcome of the payment.

These examples demonstrate how easy it can be to set up a payment gateway integration or to configure a database connection in a Spring Boot application. With just a few lines of code in the `application.properties` file, I can set up a database connection and start executing SQL queries in my Java code. Or I can configure the payment gateway endpoint and authentication credentials, and then start processing payments in my Java code using the payment gateway SDK.

### 2. Rapid Development:

Spring Boot streamlines the development process by offering a plethora of pre-built features and libraries that can be seamlessly incorporated into an application. For instance, a company in need of a web application to manage their inventory can benefit from Spring Boot's readily available features to expedite the development process. With Spring Boot, developers can easily integrate a broad range of libraries and tools into their application, including Spring Data JPA for data persistence, Spring Security for authentication and authorization, and Lombok for reducing boilerplate code for model/data objects.

**1.** To get started, the first step is to set up a new Spring Boot project via the Spring Initializr and include the necessary dependencies:

- Spring Web (for building web applications)
- Spring Data JPA (for working with databases)
- Spring Boot Lombok (for minimizing the unused code)
- Swagger (for generating the REST API documents for RESTful web services)

**2.** Creating a new `User` entity class to represent the inventory users. This class includes annotations such as `@Entity`, `@Id`, and `@GeneratedValue` to define the primary key and other properties of the class. The `@Column` annotation is used to specify the name and constraints of the columns in the database table.

```java
@Entity
@Getter
@Setter
@Table(name = "tc_user")
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(nullable = false, unique = true)
    private String userName;//"unique"

    @Column(nullable = false, unique = true)
    private String email;//"unique"

    @Column(nullable = false)
    private String password;//"hashed"

    // other joining table
    // https://github.com/acapela000/WeatherForecastAPI/blob/basic-sql/src/main/java/com/charlieThao/weather_forcast_demo/model/User.java
}
```

**3.** Creating a new `UserRepository` interface that extends Spring Data CRUD's `CrudRepository` interface to provide basic CRUD (create, read, update, delete) operations for the `User` entity:

```java
@RepositoryRestResource(collectionResourceRel = "userList", path = "user")
@CrossOrigin("*")
public interface UserRepository extends CrudRepository<User, String>, PagingAndSortingRepository<User, String> {

    @RestResource(path = "/userName")
    List<User> findByUserName(String userName);

    @RestResource(path = "/email")
    List<User> findByEmail(String email);
}
```

**4.** Then creating a new `UserController` class to handle HTTP requests for managing inventory users. This class uses Spring Boot's `@RequestController` and `@RequestMapping` annotations to define an HTTP endpoint. We inject the `UserRepository` bean using the `@Autowired` annotation and use it to retrieve, create, update, and delete `User` objects. 

```java
@RestController
@RequestMapping("/user")
public class UserController {

private UserDatabaseInterface userdb = new UserMemoryDatabase();

@RequestMapping(
        value = "/create",
        method = RequestMethod.POST,
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<ResponseMsg> createUserAcc(@RequestBody User user) {
    String unique = UUID.randomUUID().toString();
    user.setIdAccount(unique);
    boolean created = userdb.creatUser(unique, user);
    if (created) {
        return ResponseEntity.ok(new ResponseMsg("User account is created successfully!"));
    }
    return ResponseEntity.notFound().build();
}

 // other methods for getting, editing and deleting users
// https://github.com/acapela000/WeatherForecastAPI/blob/basic-sql/src/main/java/com/charlieThao/weather_forcast_demo/controller/UserController.java

}
```

With just a few lines of code, I've created a fully functional web application for managing inventory items, complete with database persistence and basic CRUD operations. We can continue to add more features and functionality using Spring Boot's extensive library of tools and frameworks.

### 3. Microservices:
**What is microservices ?**

Microservices is an architectural style for building software applications as a collection of small, independent, and loosely-coupled services. Each microservice is designed to perform a specific business function and can communicate with other microservices through well-defined interfaces. This approach allows for greater scalability, flexibility, and resilience compared to traditional monolithic architectures.

**Microservices in Spring Boot**

Spring Boot is well-suited for building microservices because it provides a lightweight and modular approach to application development, which aligns with the principles of microservices architecture. Spring Boot allows developers to create small, self-contained services that can be easily deployed, scaled, and managed independently. Additionally, Spring Boot provides a range of features and libraries that support the development and deployment of microservices, such as distributed tracing, service discovery, and cloud deployment options.

A company building a large-scale e-commerce platform can use Spring Boot's microservices capabilities to break down the application into smaller, more manageable components. By using Spring Boot to develop microservices, the application can be more modular, scalable, and easier to maintain. Each microservice can be developed and tested independently, and can be deployed and scaled individually.

To demonstrate this concept, I provide an example of a microservice that handles product information for an e-commerce platform using Spring Boot.

First, defining the product model:

```java
public class Product {
    private String id;
    private String name;
    private double price;
    // getters and setters
}

```

Next, creating a REST controller that handles requests for retrieving and updating product information:

```java
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") String id) {
        return productService.getProductById(id);
    }

    @PutMapping("/{id}")
    public void updateProduct(@PathVariable("id") String id, @RequestBody Product product) {
        productService.updateProduct(id, product);
    }
}

```

In the controller, I use annotations to map HTTP requests to methods. The `@GetMapping` annotation maps GET requests to the `getProductById()` method, and the `@PutMapping` annotation maps PUT requests to the `updateProduct()` method. I also inject a `ProductService` instance using Spring's dependency injection.

Next, defining the `ProductService` interface and its implementation:

```java
public interface ProductService {
    Product getProductById(String id);
    void updateProduct(String id, Product product);
}

@Service
public class ProductServiceImpl implements ProductService {
    private Map<String, Product> products = new HashMap<>();

    @Override
    public Product getProductById(String id) {
        return products.get(id);
    }

    @Override
    public void updateProduct(String id, Product product) {
        products.put(id, product);
    }
}
```

In this example, I use a simple in-memory data store to keep track of products. However, in a real-world scenario, we could use a database or some other data source.

Finally, creating a Spring Boot application class that configures the microservice:

```java
@SpringBootApplication
public class ProductMicroserviceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductMicroserviceApplication.class, args);
    }
}
```

With this simple example, I've demonstrated how Spring Boot can be used to create a microservice that handles product information for an e-commerce platform.

### 4. Dependency Management:

When developing an enterprise application, the task of managing dependencies can be quite daunting. Thankfully, Spring Boot provides a solution to this issue by efficiently managing all of the dependencies required by the application. For instance, when building a healthcare application, Spring Boot can be employed to manage the dependencies necessary for HIPAA compliance, including the HAPI FHIR library for FHIR API implementation.

[More about HAPI FHIR - The Open Source FHIR API for Java](https://hapifhir.io/)

With Spring Boot, developers can rest easy knowing that all dependencies required by the application are being expertly handled, thus streamlining the development process and making it simpler to manage and update dependencies.

To demonstrate this concept, I provide an example as below.

First, I add the following dependency to the pom.xml file:

```xml
<dependencies>
    <!-- other dependencies -->
    <dependency>
        <groupId>ca.uhn.hapi.fhir</groupId>
        <artifactId>hapi-fhir-base</artifactId>
        <version>5.4.0</version>
    </dependency>
</dependencies>

```

In this example, I use the HAPI FHIR library to implement the FHIR API, which is required for healthcare applications to comply with HIPAA regulations.

Next, I create a FHIR controller that handles requests for retrieving and updating patient information:

```java
@RestController
@RequestMapping("/fhir/Patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable("id") String id) {
        return patientService.getPatientById(id);
    }

    @PutMapping("/{id}")
    public void updatePatient(@PathVariable("id") String id, @RequestBody Patient patient) {
        patientService.updatePatient(id, patient);
    }
}
```

In the controller, I use annotations to map HTTP requests to methods. The `@GetMapping` annotation maps GET requests to the `getPatientById()` method, and the `@PutMapping` annotation maps PUT requests to the `updatePatient()` method. I also inject a `PatientService` instance using Spring's dependency injection.

Next, defining the `PatientService` interface and its implementation:

```java
public interface PatientService {
    Patient getPatientById(String id);
    void updatePatient(String id, Patient patient);
}

@Service
public class PatientServiceImpl implements PatientService {
    private Map<String, Patient> patients = new HashMap<>();

    @Override
    public Patient getPatientById(String id) {
        return patients.get(id);
    }

    @Override
    public void updatePatient(String id, Patient patient) {
        patients.put(id, patient);
    }
}

```

In this example, I use a simple in-memory data store to keep track of patients. 

Finally, I create a Spring Boot application class that configures the application:

```java
@SpringBootApplication
public class HealthcareApplication {
    public static void main(String[] args) {
        SpringApplication.run(HealthcareApplication.class, args);
    }
}

```

With this simple example, I've demonstrated how Spring Boot can be used to manage dependencies and build a healthcare application that complies with HIPAA regulations.

### 5. Testing:

Spring Boot provides a framework for unit and integration testing, making it easier to ensure the quality of the application.

In a real-life project, a developer can use Spring Boot's testing capabilities to automate tests and ensure that the application is functioning as expected. 

An example of a unit test for a Spring Boot controller using the JUnit and Mockito testing frameworks:

 ```java
@RunWith(SpringRunner.class)
@WebMvcTest(MyController.class)
public class MyControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MyService myService;

    @Test
    public void testGetAllItems() throws Exception {
        List<Item> itemList = Arrays.asList(new Item("item1"), new Item("item2"));

        Mockito.when(myService.getAllItems()).thenReturn(itemList);

        mockMvc.perform(MockMvcRequestBuilders.get("/items"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("item1"))
            .andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value("item2"));
    }
}
```

In this example, I're testing a `MyController` that depends on a MyService to retrieve a list of items. I're using the `@MockBean` annotation to mock the service and the MockMvc class to simulate HTTP requests to our controller. The `@WebMvcTest` annotation allows us to test only the web layer of the application, without loading the full context.

The `testGetAllItems` method tests the controller's `getAllItems` method, which returns a list of items. I're using Mockito to mock the service's behavior and returning a list of two items. Then, I'm using the `mockMvc.perform` method to simulate a GET request to `/items` and expecting a status code of 200 and a JSON response containing the two items with the expected names. This ensures that the controller is returning the expected data when called.

### 6. Community Support:

Spring Boot has a large and active community of developers who contribute to the development and improvement of the framework. This means that developers can easily find resources, support, and guidance when building our applications.
 
For example, when developing a social media application, a developer can leverage the Spring Boot community to get advice on implementing real-time messaging using WebSockets with code snippet.

```java
@MessageMapping("/chat")
@SendTo("/topic/messages")
public MessageDTO sendMessage(@Payload MessageDTO message) {
    return message;
}
```

In this example, I define a message mapping endpoint for handling incoming messages sent to `/chat`. The `@SendTo` annotation specifies that the response should be sent to the `/topic/messages` destination, which allows multiple clients to subscribe to the same topic and receive messages in real-time.

By leveraging the Spring Boot community, developers can benefit from the collective expertise and experience of a large and active community. This can help them solve complex problems, improve the quality of their code, and stay up-to-date with the latest best practices in software development.


## Is there any other framework for building web applications in the Java programming language?

There are several other popular frameworks for building web applications in the Java programming language. Here are a few examples:

1.JavaServer Faces (JSF): A framework for building component-based user interfaces for web applications.

2.Struts: A framework that provides a set of tools and utilities for building web applications with Model-View-Controller (MVC) architecture.

3.Play Framework: A lightweight, high-performance framework for building web applications in Java and Scala.

4.Apache Wicket: A component-based web application framework that enables developers to create rich and dynamic web applications with reusable components.

5.Vaadin: A web application framework that allows developers to build web applications using a graphical user interface (GUI) rather than writing code.

Each of these frameworks has its own strengths and weaknesses, and the choice of which one to use depends on the specific needs and requirements of the project. We can choose the framework that best suits their needs based on factors such as ease of use, performance, scalability, and community support.

In the near future, I'll start a new journey with one of other framework for building web applications in th Java programming language.

Thank you so much for reading my post:bow:, looking forward to your reading in next journey:wave::ok_woman::v:.
