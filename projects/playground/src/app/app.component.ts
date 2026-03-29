import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { faBookOpen, faBriefcase, faCalendarCheck, faCheckCircle, faChevronRight, faClipboard, faClock } from '@fortawesome/free-solid-svg-icons';
import {
  AccessibilityService,
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
  CardButtonComponent,
  type BadgeVariant,
  type FontSize,
  type IconName,
  type ListItemData,
  type NavItemData,
  type StatItem,
  type Theme,
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
    CardButtonComponent,
    UserInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  private readonly accessibility = inject(AccessibilityService);

  protected readonly fontSizes: FontSize[] = ['small', 'medium', 'large', 'x-large', 'xx-large'];
  protected readonly themes: Theme[] = ['default', 'high-contrast', 'soft'];

  protected readonly navItems: NavItemData[] = [
    {
      label: 'Inicio',
      path: '/inicio',
      icon: 'home',
      active: true,
      description: 'Resumo do cuidado',
      ariaLabel: 'Navegar para visao geral',
    },
    {
      label: 'Acessibilidade',
      path: '/agenda',
      icon: 'calendar',
      description: 'Consultas e visitas',
      ariaLabel: 'Navegar para agenda',
    },
    {
      label: 'Perfil',
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

  protected readonly icons = {
    calendar: faCalendarCheck,
    study: faBookOpen,
    work: faBriefcase,
    chevronRight: faChevronRight,
    check: faCheckCircle,
    clipboard: faClipboard,
    clock: faClock,
  };

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

  protected get currentTheme(): Theme {
    return this.accessibility.theme();
  }

  protected get currentFontSize(): FontSize {
    return this.accessibility.fontSize();
  }

  protected get currentVoiceReading(): boolean {
    return this.accessibility.voiceReading();
  }

  protected get currentSpeechRate(): number {
    return this.accessibility.speechRate();
  }

  protected get currentDyslexiaFont(): boolean {
    return this.accessibility.dyslexiaFont();
  }

  protected applyTheme(theme: Theme): void {
    this.accessibility.theme.set(theme);
  }

  protected applyFontSize(size: FontSize): void {
    this.accessibility.fontSize.set(size);
  }

  protected toggleVoiceReading(): void {
    this.accessibility.voiceReading.set(!this.accessibility.voiceReading());
  }

  protected toggleDyslexiaFont(): void {
    this.accessibility.dyslexiaFont.set(!this.accessibility.dyslexiaFont());
  }

  protected updateSpeechRate(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const nextValue = Number.parseFloat(target?.value ?? '');
    if (!Number.isNaN(nextValue)) {
      this.accessibility.speechRate.set(nextValue);
    }
  }
}
