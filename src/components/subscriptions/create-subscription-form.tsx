import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  type Subscription,
  type SubscriptionCategory,
  categoryLabels,
} from '@/types/subscription'
import { useSubscriptionDialogStore } from '@/stores/useSubscriptionDialogStore'

const subscriptionSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  category: z.enum([
    'streaming',
    'music',
    'gaming',
    'productivity',
    'cloud',
    'fitness',
    'news',
    'education',
    'other',
  ] as const),
  amount: z.number().min(0.01, 'El monto debe ser mayor a 0'),
  currency: z.enum(['USD', 'PEN'] as const),
  billingCycle: z.enum(['monthly', 'annual'] as const),
  status: z.enum(['active', 'paused', 'cancelled'] as const),
  nextBillingDate: z.string().min(1, 'La fecha de cobro es requerida'),
  cardType: z.enum(['visa', 'mastercard', 'amex', 'other'] as const),
  cardLastFour: z
    .string()
    .length(4, 'Debe ser de 4 dígitos')
    .regex(/^\d+$/, 'Solo números'),
  color: z.string().min(1, 'El color es requerido'),
})

export type FormData = z.infer<typeof subscriptionSchema>

interface Props {
  subscription?: Subscription | null
  onSubmit: (data: Omit<Subscription, 'id' | 'createdAt'>) => void
}

const predefinedColors = [
  '#E50914',
  '#1DB954',
  '#113CCF',
  '#FF9500',
  '#AF52DE',
  '#00D4AA',
  '#FF2D55',
  '#5856D6',
  '#34C759',
  '#007AFF',
]

function CreateSubscriptionForm({ subscription, onSubmit }: Props) {
  const isOpen = useSubscriptionDialogStore((state) => state.isOpen)
  const changeIsOpen = useSubscriptionDialogStore((state) => state.changeIsOpen)

  const form = useForm<FormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      name: '',
      category: 'streaming',
      amount: 0,
      currency: 'USD',
      billingCycle: 'monthly',
      status: 'active',
      nextBillingDate: '',
      cardType: 'visa',
      cardLastFour: '',
      color: predefinedColors[0],
    },
  })

  useEffect(() => {
    if (subscription) {
      form.reset({
        name: subscription.name,
        category: subscription.category,
        amount: subscription.amount,
        currency: subscription.currency,
        billingCycle: subscription.billingCycle,
        status: subscription.status,
        nextBillingDate: subscription.nextBillingDate,
        cardType: subscription.cardType,
        cardLastFour: subscription.cardLastFour,
        color: subscription.color,
      })
    } else {
      form.reset({
        name: '',
        category: 'streaming',
        amount: 0,
        currency: 'USD',
        billingCycle: 'monthly',
        status: 'active',
        nextBillingDate: '',
        cardType: 'visa',
        cardLastFour: '',
        color:
          predefinedColors[Math.floor(Math.random() * predefinedColors.length)],
      })
    }
  }, [subscription, isOpen, form])

  const handleSubmit = (data: FormData) => {
    onSubmit(data as Omit<Subscription, 'id' | 'createdAt'>)
    changeIsOpen(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del servicio</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Netflix, Spotify..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {(
                      Object.entries(categoryLabels) as [
                        SubscriptionCategory,
                        string,
                      ][]
                    ).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="active">Activa</SelectItem>
                    <SelectItem value="paused">Pausada</SelectItem>
                    <SelectItem value="cancelled">Cancelada</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Monto</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Moneda</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="PEN">PEN</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="billingCycle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frecuencia</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="monthly">Mensual</SelectItem>
                    <SelectItem value="annual">Anual</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="nextBillingDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Próximo cobro</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="cardType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de tarjeta</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="mastercard">Mastercard</SelectItem>
                    <SelectItem value="amex">American Express</SelectItem>
                    <SelectItem value="other">Otra</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cardLastFour"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Últimos 4 dígitos</FormLabel>
                <FormControl>
                  <Input maxLength={4} placeholder="1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <div className="flex gap-2 flex-wrap">
                {predefinedColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => field.onChange(color)}
                    className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                      field.value === color
                        ? 'ring-2 ring-offset-2 ring-primary'
                        : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => changeIsOpen(false)}
          >
            Cancelar
          </Button>
          <Button type="submit">
            {subscription ? 'Guardar cambios' : 'Agregar'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateSubscriptionForm
