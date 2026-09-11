import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsNotFutureDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNotFutureDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) return false;
          const fecha = new Date(value);
          if (isNaN(fecha.getTime())) return false;
          
          const hoy = new Date();
          const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
          const fechaSinHora = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());

          return fechaSinHora.getTime() <= hoySinHora.getTime();
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} no puede ser posterior a la fecha actual`;
        },
      },
    });
  };
}
