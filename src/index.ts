import { RabbitMQ } from "./rabbitmq";

const rabbitMQ = new RabbitMQ();

(async () => {
    await rabbitMQ.connect("amqp://localhost");

    rabbitMQ.consume("user-queue", (message) => {
        const { name, email } = JSON.parse(message);
        console.log(`Notification sent to ${name} (${email})`);
    });
})();