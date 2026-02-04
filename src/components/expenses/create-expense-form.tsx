import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format } from 'date-fns'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  type Expense,
  type ExpenseCategory,
  type Currency,
  expenseCategoryLabels,
  expenseCategoryIcons,
} from '@/types/expense'
import { useExpenseDialogStore } from '@/stores/useExpenseDialogStore'

const expenseSchema = z.object({
  description: z.string().min(1, 'La descripción es requerida'),
  amount: z.number().positive('El monto debe ser mayor a 0'),
  currency: z.enum(['USD', 'PEN'] as const),
  category: z.enum([
    'food',
    'transport',
    'shopping',
    'entertainment',
    'health',
    'utilities',
    'other',
  ] as const),
  date: z.string().min(1, 'La fecha es requerida'),
  notes: z.string().optional(),
})

type ExpenseFormData = z.infer<typeof expenseSchema>

interface Props {
  expense: Expense | null
  onSubmit: (data: Omit<Expense, 'id' | 'createdAt'>) => void
}

const categories: ExpenseCategory[] = [
  'food',
  'transport',
  'shopping',
  'entertainment',
  'health',
  'utilities',
  'other',
]
const currencies: Currency[] = ['USD', 'PEN']

function CreateExpenseForm({ expense, onSubmit }: Props) {
  const isExpenseDialogOpen = useExpenseDialogStore((state) => state.isOpen)
  const changeExpenseDialogIsOpen = useExpenseDialogStore(
    (state) => state.changeIsOpen,
  )

  const form = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      description: '',
      amount: 0,
      currency: 'USD',
      category: 'other',
      date: format(new Date(), 'yyyy-MM-dd'),
      notes: '',
    },
  })

  useEffect(() => {
    if (expense) {
      form.reset({
        description: expense.description,
        amount: expense.amount,
        currency: expense.currency,
        category: expense.category,
        date: expense.date,
        notes: expense.notes || '',
      })
    } else {
      form.reset({
        description: '',
        amount: 0,
        currency: 'USD',
        category: 'other',
        date: format(new Date(), 'yyyy-MM-dd'),
        notes: '',
      })
    }
  }, [expense, form, isExpenseDialogOpen])

  const handleSubmit = (data: ExpenseFormData) => {
    onSubmit({
      description: data.description,
      amount: data.amount,
      currency: data.currency,
      category: data.category,
      date: data.date,
      notes: data.notes,
    })

    changeExpenseDialogIsOpen(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Almuerzo en restaurante" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monto</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
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
                    {currencies.map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {expenseCategoryIcons[cat]} {expenseCategoryLabels[cat]}
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
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Detalles adicionales..."
                  className="resize-none"
                  rows={2}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => changeExpenseDialogIsOpen(false)}
          >
            Cancelar
          </Button>
          <Button type="submit" className="flex-1">
            {expense ? 'Guardar' : 'Agregar'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateExpenseForm
