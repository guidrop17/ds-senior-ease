import { Component } from '@angular/core';
import {
  AgendaListComponent,
  AvatarComponent,
  BadgeComponent,
  ButtonComponent,
  DashboardLayoutComponent,
  DividerComponent,
  HeaderComponent,
  HeroCardComponent,
  IconComponent,
  ListItemComponent,
  MaterialsListComponent,
  NavItemComponent,
  SidebarComponent,
  StatComponent,
  StatsGridComponent,
  TextComponent,
  UserInfoComponent,
  type BadgeVariant,
  type IconName,
  type ListItemData,
  type NavItemData,
  type StatItem,
} from 'ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AgendaListComponent,
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    DashboardLayoutComponent,
    DividerComponent,
    HeaderComponent,
    HeroCardComponent,
    IconComponent,
    ListItemComponent,
    MaterialsListComponent,
    NavItemComponent,
    SidebarComponent,
    StatComponent,
    StatsGridComponent,
    TextComponent,
    UserInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App {
  protected readonly navItems: NavItemData[] = [
    {
      label: 'Visao geral',
      path: '/inicio',
      icon: 'home',
      active: true,
      description: 'Resumo do cuidado',
      ariaLabel: 'Navegar para visao geral',
    },
    {
      label: 'Agenda',
      path: '/agenda',
      icon: 'calendar',
      description: 'Consultas e visitas',
      ariaLabel: 'Navegar para agenda',
    },
    {
      label: 'Materiais',
      path: '/materiais',
      icon: 'book',
      description: 'Guias e apoio',
      ariaLabel: 'Navegar para materiais',
    },
    {
      label: 'Mensagens',
      icon: 'message',
      description: 'Contato com familia',
      disabled: true,
      ariaLabel: 'Mensagens indisponivel neste ambiente',
    },
  ];

  protected readonly stats: StatItem[] = [
    { label: 'Consultas confirmadas', value: '12', description: 'Semana atual', tone: 'primary' },
    { label: 'Planos revisados', value: '08', description: 'Ultimos 7 dias', tone: 'success' },
    { label: 'Alertas ativos', value: '03', description: 'Acompanhamento diario', tone: 'warning' },
  ];

  protected readonly agendaItems: ListItemData[] = [
    {
      icon: 'calendar',
      title: 'Consulta geriatrica',
      description: 'Dr. Renato, 14:30',
      meta: 'Hoje',
      badgeLabel: 'Confirmado',
      badgeVariant: 'success',
      ariaLabel: 'Consulta geriatrica hoje as 14 e 30 confirmada',
    },
    {
      icon: 'clock',
      title: 'Medicao de pressao',
      description: 'Checklist com cuidadora',
      meta: '16:00',
      badgeLabel: 'Rotina',
      badgeVariant: 'primary',
      ariaLabel: 'Medicao de pressao as 16 horas, rotina',
    },
  ];

  protected readonly materialItems: ListItemData[] = [
    {
      icon: 'book',
      title: 'Guia de alimentacao assistida',
      description: 'Boas praticas para a familia',
      meta: 'PDF atualizado',
      badgeLabel: 'Novo',
      badgeVariant: 'warning',
      ariaLabel: 'Guia de alimentacao assistida, novo material em PDF',
    },
    {
      icon: 'check',
      title: 'Checklist de seguranca domestica',
      description: 'Itens essenciais para prevencao',
      meta: 'Leitura rapida',
      badgeLabel: 'Recomendado',
      badgeVariant: 'success',
      ariaLabel: 'Checklist de seguranca domestica recomendado',
    },
  ];

  protected readonly badgeSamples: Array<{ label: string; variant: BadgeVariant }> = [
    { label: 'Neutral', variant: 'neutral' },
    { label: 'Primary', variant: 'primary' },
    { label: 'Success', variant: 'success' },
    { label: 'Warning', variant: 'warning' },
    { label: 'Danger', variant: 'danger' },
  ];

  protected readonly iconNames: IconName[] = [
    'home',
    'calendar',
    'book',
    'chart',
    'message',
    'bell',
    'clock',
    'check',
    'user',
  ];

  protected readonly featuredStat: StatItem = {
    label: 'Planos revisados',
    value: '08',
    description: 'Ultimos 7 dias',
    tone: 'success',
  };

  protected readonly featuredListItem: ListItemData = {
    icon: 'calendar',
    title: 'Visita domiciliar',
    description: 'Acompanhamento com enfermeira responsavel',
    meta: 'Amanha',
    badgeLabel: 'Prioridade',
    badgeVariant: 'warning',
    ariaLabel: 'Visita domiciliar amanha com prioridade',
  };
}
