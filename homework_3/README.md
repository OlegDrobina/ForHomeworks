The list of tasks to be completed.

HW 3.1. Перелік типів

Створити репозиторій із файлом index.html.
Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log

HW 3.2. Числа та рядки

Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);

HW 3.3. Розкласти п'ятизначне число

Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:

10369

1 0 3 6 9

The tasks were completed in the way the end-user who starts the program will see the alert that asks to select the task to check. Additionally at the very beginning the end user is informed that the "Cancel" button can be clicked to stop the program execution.

Based on option selected the specific task results will be demonstrated, a correspondent method

processTheFirstTask
processTheSecondTask
processTheThirdTask

will be triggered.

NOTE: I'm sure that the code in task 3 can be written more clear, but so far I haven't figured if (and how?) it can be. The number of "if" inside "if" statements is confusing, but they are needed to check cases like:

1. Five digits text is inserted?
2. Empty string is inserted?
3. Cancel button is clicked? Or the page was refreshed?
4. Was the number inserted or some numbers and text?
